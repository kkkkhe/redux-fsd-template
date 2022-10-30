import { TypedUseSelectorHook, useSelector } from "react-redux";
import { rootState } from "./root-state";

export const useAppSelector:TypedUseSelectorHook<rootState> = useSelector