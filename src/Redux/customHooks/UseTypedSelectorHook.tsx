/** @format */

import { TypedUseSelectorHook, useSelector } from "react-redux"
import { RootState } from "../Reducer"
export const UseTypedSelectorHook: TypedUseSelectorHook<RootState> = useSelector
