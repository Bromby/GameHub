import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";

//const plats = useGenres();

const PlatformSelector = () => {
    const {data, error} = usePlatforms();
  return (
        <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>}>Platforms</MenuButton>
        
        <MenuList>
                {data.map(platform => <MenuItem key={platform.id}>{ platform.name }</MenuItem>)}
        </MenuList>
    </Menu>


    // <ul>
    //     {data.map((platform) => <li key={platform.id}>{platform.name}</li>)}
    // </ul>
  )
}

export default PlatformSelector
