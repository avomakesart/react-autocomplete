/**
 * All of these types are using typescript
 * generic types in order to use it in the
 * forwardRef util, using the React api.
 * Everything for developer experience purposes.
 */

export type OmitCommonProps<
  Target,
  OmitAdditionalProps extends keyof any = never
> = Omit<Target, 'transition' | 'as' | 'color' | OmitAdditionalProps>;

export type RightJoinProps<
  SourceProps extends object = {},
  OverrideProps extends object = {}
> = OmitCommonProps<SourceProps, keyof OverrideProps> & OverrideProps;

export type MergeWithAs<
  ComponentProps extends object,
  AsProps extends object,
  AdditionalProps extends object = {},
  AsComponent extends As = As
> = RightJoinProps<ComponentProps, AdditionalProps> &
  RightJoinProps<AsProps, AdditionalProps> & {
    as?: AsComponent;
  };

export type As<Props = any> = React.ElementType<Props>;

/**
 * Extract the props of a React element or component
 */
export type PropsOf<T extends As> = React.ComponentPropsWithoutRef<T> & {
  as?: As;
};

export type ComponentWithAs<Component extends As, Props extends object = {}> = {
  <AsComponent extends As = Component>(
    props: MergeWithAs<
      React.ComponentProps<Component>,
      React.ComponentProps<AsComponent>,
      Props,
      AsComponent
    >
  ): JSX.Element;

  displayName?: string;
  propTypes?: React.WeakValidationMap<any>;
  contextTypes?: React.ValidationMap<any>;
  defaultProps?: Partial<any>;
  id?: string;
};

/**
 * Returns the type inferred by a promise's return value.
 *
 * @example
 * async function getThing() {
 *   // return type is a number
 *   let result: number = await fetchValueSomewhere();
 *   return result;
 * }
 *
 * type Thing = ThenArg<ReturnType<typeof getThing>>;
 * // number
 */
export type ThenArg<T> = T extends PromiseLike<infer U> ? U : T;
