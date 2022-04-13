import {ListSetting} from '@/components/list/listSettings'

const listSetting: ListSetting = {
  title: '정수별 현황',
  total: true,
  headers: [
    {
      field:'clientItemName',
      label:'거래처물품명',
      type:'label',
      width: '50px'
    }
  ]
}


export {listSetting};
