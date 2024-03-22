import {store} from "../../../redux";
import {useEffect} from "react";
import {startLoading, stopLoading} from "../../../redux/slices/loadingSlice/loadingSlice";
import getChartOptions, {clearObjs} from "../../../components/Charts/utils/getChartOptions";
import {setTableOptions} from "../../../redux/slices/userDataSlice/userDataSlice";


export const useGetChartData = () => {
    const loading = store.getState().loading.value
    const options = store.getState().userData.user.tableOptions
    useEffect(() => {
        store.dispatch(startLoading())
        getChartOptions().then((data) => {
            store.dispatch(setTableOptions(data))
            clearObjs()
            store.dispatch(stopLoading())
        }).catch(e => console.log(e))
    }, [])

    return {loading, options}
}