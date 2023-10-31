import type { ProfessionList, DeleteContexRecord, ContextData } from '../components/contextModule/type';
import DataProcessUtils from '../common/utils/DataProcessUtils';
import GenerateUniqueNumberUtils from '@/common/utils/UniqueNumberUtils';

export default class ContextDataService {

    static getProfession(): ProfessionList[] {
        return DataProcessUtils.getProfessionData();
    }

    static getProfessionNameById(id:number): string {
        const professionList = DataProcessUtils.getProfessionData();
        const professionRecord:ProfessionList | undefined = professionList.find(record => record.id == id);
        if(professionRecord === undefined){
            return '';
        }
        return professionRecord.profession;
    }

    static saveContexData(formData: ContextData) {
        const data:ContextData[] = this.getContexData();
        formData.id = GenerateUniqueNumberUtils.generateUniqueNumber();
        formData.professionName = this.getProfessionNameById(formData.profession);
        data.push(formData);
        DataProcessUtils.storeContextData(data);
    }

    static getContexData():ContextData[] {
        return DataProcessUtils.getContextDataList();
    }

    static deleteContexData(contextRecords: DeleteContexRecord[]) {
        const data:ContextData[] = this.getContexData();
        const newData = data.filter((contextRecord)=>{
            return contextRecords.find(record => record.id == contextRecord.id) === undefined;
        });
        DataProcessUtils.storeContextData(newData);
    }
}