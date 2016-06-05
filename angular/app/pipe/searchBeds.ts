import {Pipe} from 'angular2/core';

@Pipe({
    name: 'SearchPipeBeds'
})

export class SearchPipeBeds {


    transform (value, [queryString]) {
        if (value==null) {
            return null;
        }
        console.log('transform');

        return value.filter(item=>item.beds.toLowerCase().indexOf(queryString.toLowerCase()) !== -1);
    }
}