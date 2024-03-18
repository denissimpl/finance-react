import { ITableAction } from "../../../types/types"

const filterActions = (actions: ITableAction[], selectionModel:number[]) => {
    return actions.filter((obj) => {
      for (let id of selectionModel){
        if (obj.id == id) {
          return false
        }
      }
      return true
    })
  }

export default filterActions  