import { render } from '@testing-library/react'
import { Combobox, ComboboxInput, ComboboxItem, ComboboxLabel, ComboboxList } from '../../../components'

describe('components/combobox', () => {
  test('should render the Combobox component correctly with all of its childs', () => {
    const rendered = render(
      <Combobox
        onSelectOption={() => console.log('some-value')}
        selectedValue="string-value"
        onClose={() => console.log('this function should close the list')}
        isListOpen={false}
      >
        <ComboboxLabel>This is a label</ComboboxLabel>
        <ComboboxList isOpen={false}>
          <ComboboxInput
            onChange={(e: any) => console.log(e.target.value)}
            value="string-value"
            placeholder="Type a search..."
          />
          <ComboboxItem key={0} value="value-1" active={0} tabIndex={0}>
            Value 1
          </ComboboxItem>
          <ComboboxItem key={1} value="value-2" active={1} tabIndex={1}>
            Value 2
          </ComboboxItem>
          <ComboboxItem key={2} value="value-3" active={2} tabIndex={2}>
            Value 3
          </ComboboxItem>
        </ComboboxList>
      </Combobox>,
    )

    expect(rendered.baseElement).toBeInTheDocument()
  })

  test('should render the Combobox component correctly with all of its childs with a default value and mapping data from mock array', () => {
    const mockData = [
      { id: 1, title: 'Value 1', value: 'value-1' },
      { id: 2, title: 'Value 2', value: 'value-2' },
      { id: 3, title: 'Value 3', value: 'value-3' },
    ]

    const rendered = render(
      <Combobox
        onSelectOption={() => console.log('some-value')}
        selectedValue="string-value"
        onClose={() => console.log('this function should close the list')}
        isListOpen={false}
      >
        <ComboboxLabel>This is a label</ComboboxLabel>
        <ComboboxInput
          onChange={(e: any) => console.log(e.target.value)}
          value="string-value"
          placeholder="Type a search..."
        />
        <ComboboxList isOpen={false}>
          {mockData.map(({ id, title, value }, index: number) => (
            <ComboboxItem key={id} value={value} active={id} tabIndex={index}>
              {title}
            </ComboboxItem>
          ))}
        </ComboboxList>
      </Combobox>,
    )

    expect(rendered.baseElement).toBeInTheDocument()
  })
})
