import { Center } from "@chakra-ui/react"
import {
  MenuContent,
  MenuContextTrigger,
  MenuItem,
  MenuRoot,
} from "compositions/ui/menu"

export const MenuWithContextTrigger = () => {
  return (
    <MenuRoot>
      <MenuContextTrigger>
        <Center
          width="full"
          height="40"
          tabIndex={0}
          userSelect="none"
          bg="bg.subtle"
          borderWidth="2px"
          borderStyle="dashed"
          rounded="lg"
        >
          Right click here
        </Center>
      </MenuContextTrigger>
      <MenuContent>
        <MenuItem value="new-txt">New Text File</MenuItem>
        <MenuItem value="new-file">New File...</MenuItem>
        <MenuItem value="new-win">New Window</MenuItem>
        <MenuItem value="open-file">Open File...</MenuItem>
        <MenuItem value="export">Export</MenuItem>
      </MenuContent>
    </MenuRoot>
  )
}
