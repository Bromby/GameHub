import { HStack } from '@chakra-ui/react'
import useStores, { Store } from '../hooks/useStores'
import useS2gData from '../hooks/useS2gData';

const StoreList = () => {

//const { data, isLoading, error } =  useStores()

    const { data, isLoading, error } =  useS2gData();
    console.log(data);
  return (
    <div>
        yay
    </div>
  )
}

export default StoreList
