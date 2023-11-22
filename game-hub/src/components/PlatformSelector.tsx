import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";

//const plats = useGenres();

interface Props{
    onSelectPlatform: (platform: Platform) => void; 
    selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform , selectedPlatform }: Props) => {
    const {data, error} = usePlatforms();
  return (
        <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
            {selectedPlatform?.name || 'Platforms'}
        </MenuButton>
        
        <MenuList>
                {data.map(platform => <MenuItem key={platform.id} onClick={() => onSelectPlatform(platform)}>{ platform.name }</MenuItem>)}
        </MenuList>
    </Menu>


    // <ul>
    //     {data.map((platform) => <li key={platform.id}>{platform.name}</li>)}
    // </ul>
  )
}

export default PlatformSelector
