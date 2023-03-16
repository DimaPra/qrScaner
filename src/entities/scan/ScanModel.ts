import { MobXRepository } from "../../MobXRepository/MobXRepository";

export interface IScanModel {
    code: string;
    name: string;
    amount: string
}

class ScanModel implements IScanModel {
    private codeRepository = new MobXRepository<string>('');
    private nameRepository = new MobXRepository<string>('');
    private amountRepository = new MobXRepository<string>('');

    get code() {
        return this.codeRepository.data || ''
    };

    set code(data: string) {
        this.codeRepository.save(data)
    };

    get name() {
        return this.nameRepository.data || ''
    };

    set name(data: string) {
        this.nameRepository.save(data)
    };

    get amount() {
        return this.amountRepository.data || ''
    };

    set amount(data: string) {
        this.amountRepository.save(data)
    };
    
    clear = () => {
        this.code = '';
        this.name = '';
        this.amount = '';
    };
};

export const scanModel = new ScanModel();
