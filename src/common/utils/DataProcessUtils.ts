import StorageUtils from './StorageUtils';
import { CONTEXT_DATA } from '../constants/storageConstant';
import type { ContextData, ProfessionList } from '../../components/contextModule/type';
import { professionData } from '@/mocks/profession';

export default class DataProcessUtils {

    static getProfessionData(): ProfessionList[] {
        return professionData;

    }

    static getContextDataList(): ContextData[] {
        return StorageUtils.getItems(CONTEXT_DATA);
    }

    static storeContextData(data: ContextData[]) {
        StorageUtils.storeItem(CONTEXT_DATA, data);
    }

    static deleteContextData() {
        StorageUtils.removeItem(CONTEXT_DATA);
    }

}