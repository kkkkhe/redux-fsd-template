import { useSelector } from "react-redux"

export const Input = ({onChange}:any) => {
	const value = useSelector((state: any) => state.todoSlice.text)
	return (
		<input onChange={onChange}type="text" value={value} />
	)
}