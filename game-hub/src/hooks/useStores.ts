import useData from "./useData";

export interface Store{
    id: number;
    name: string;
}

const useStores= () => useData<Store>('/stores');

export default useStores