import type { FunctionComponent } from 'react'

export interface ReactComponent<T> extends FunctionComponent<{ className?: string } & T> {}
