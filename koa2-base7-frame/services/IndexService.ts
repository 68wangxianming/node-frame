import {IIndex} from '../interface/IIndex';
import {Model} from '../models/User'

export class IndexService implements IIndex {
    private userStorage: Model.User[] = [
        {email: '123456@qq.com', name: 'xianming'},
        {email: '654321@qq.com', name: 'xiaohong'}
    ]

    getUser(id: string) {
        return {}
    }
}
