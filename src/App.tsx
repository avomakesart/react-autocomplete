import { createRef, useEffect, useState } from 'react'
import { Container, Layout, Spinner } from './components'
import { Combobox, ComboboxInput, ComboboxItem, ComboboxLabel, ComboboxList } from './components/combobox'
import { useKeyPress } from './hooks'
import { getHighlightedText } from './utils'

function App() {
  const [users, setUsers] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [isListOpen, setIsListOpen] = useState(false)
  const [suggestions, setSuggestions] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  /*
   * States related to the accesibility
   * behavior, using up and down arrow
   * to navigate on the item list.
   */
  const comboboxInputRef = createRef<HTMLInputElement>()
  const downPress = useKeyPress('ArrowDown', comboboxInputRef)
  const upPress = useKeyPress('ArrowUp', comboboxInputRef)
  const enterPress = useKeyPress('Enter', comboboxInputRef)
  const [cursor, setCursor] = useState<number>(0)

  useEffect(() => {
    const loadUsers = async () => {
      try {
        setIsLoading(true)
        const response = await fetch('https://reqres.in/api/users?per_page=12')
        const result = await response.json()
        setIsLoading(false)
        setUsers(result.data)
      } catch (err: any) {
        throw new Error(err.message)
      }
    }

    loadUsers()
    return () => {
      setUsers([])
    }
  }, [])

  const handleChange = (value: string) => {
    let queryMatches: any = []
    if (!value) setIsListOpen(false)
    else setIsListOpen(true)

    if (value.length > 0) {
      queryMatches = users.filter((user: any) => {
        const regex = new RegExp(`${value}`, 'gi')
        const userFullName = `${user.first_name} ${user.last_name}`

        const matchedUser = userFullName.match(regex)
        return matchedUser
      })
    }

    setSuggestions(queryMatches)
    setInputValue(value)
  }

  /*
   * Multiple effects to separate functionalities on arrow navigation
   * and enter keyboard, and be safe from side effects
   */
  useEffect(() => {
    if (suggestions.length && downPress) {
      setCursor((prevState) => (prevState < suggestions.length - 1 ? prevState + 1 : prevState))
    }
  }, [downPress])

  useEffect(() => {
    if (suggestions.length && upPress) {
      setCursor((prevState) => (prevState > 0 ? prevState - 1 : prevState))
    }
  }, [upPress])

  useEffect(() => {
    if (suggestions.length && enterPress) {
      setInputValue(
        //@ts-ignore
        `${suggestions[cursor].first_name} ${suggestions[cursor].last_name}`,
      )
      setIsListOpen(false)
    }
  }, [cursor, enterPress])

  return (
    <Layout>
      <Container>
        <>
          <Combobox
            selectedValue={inputValue}
            onSelectOption={setInputValue}
            onClose={() => setIsListOpen(false)}
            isListOpen={isListOpen}
          >
            <ComboboxLabel>Make a search</ComboboxLabel>
            <ComboboxInput
              onChange={(e: any) => handleChange(e.target.value)}
              value={inputValue}
              placeholder="Make a search..."
              ref={comboboxInputRef}
            />
            <ComboboxList>
              {suggestions.length === 0 ? (
                <ComboboxItem value="not found">Not found</ComboboxItem>
              ) : suggestions && isLoading ? (
                <div className="dflex justify-center p-5">
                  <Spinner />
                </div>
              ) : (
                suggestions.map(
                  (
                    suggestion: {
                      id: number
                      first_name: string
                      last_name: string
                      avatar: string
                    },
                    index: number,
                  ) => (
                    <ComboboxItem
                      key={index}
                      value={`${suggestion.first_name} ${suggestion.last_name}`}
                      active={cursor === index}
                      tabIndex={cursor}
                    >
                      <span className="dflex items-center">
                        <img src={suggestion.avatar} alt={suggestion.first_name.toLowerCase()} className="avatar-img" />
                        {getHighlightedText(`${suggestion.first_name} ${suggestion.last_name}`, inputValue)}
                      </span>
                    </ComboboxItem>
                  ),
                )
              )}
            </ComboboxList>
          </Combobox>
        </>
      </Container>
    </Layout>
  )
}

export default App
