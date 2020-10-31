const chai = require('chai');
const assert = chai.assert;
const functions= require('../functions');

describe('sum', function(){
    it('should return 5 when adding 3 and 2', function(){
        assert.equal(functions.sum(3, 2), 5);
    });

    it('should return 3 when adding 1.5 and 1.5', function(){
        assert.equal(functions.sum(1.5, 1.5), 3);
    });

    it('should return 1 when adding 4 and -3', function(){
        assert.equal(functions.sum(4, -3), 1);
    });
});

describe('product', function(){
    it('it should return 9 when multiplying 3 and 3', function(){
        assert.equal(functions.product(3, 3), 9);
    });

    it('it should return 7.5 when multiplying 2.5 and 3.0', function(){
        assert.equal(functions.product(2.5, 3.0), 7.5);
    });

    it('it should return -2 when multiplying 2 and -1', function(){
        assert.equal(functions.product(2, -1), -2);
    });
});

describe('min', function(){
    it('it should return 2 when numbers are 2 and 2', function(){
        assert.equal(functions.min(2, 2),2);
    });
    
    it('it should return -5 when numbers are -4 and -5', function(){
        assert.deepEqual(functions.min(-4, -5),-5);
    });
    
     it('it should return 0.001 when numbers are 0.01 and 0.001', function(){
        assert.deepEqual(functions.min(0.01, 0.001), 0.001);
    });
});

describe('max', function(){
    it('it should return 3 when numbers are 3 and 3', function(){
        assert.equal(functions.max(3, 3),3);
    });
           
    it('it should return -4 when numbers are -4 and -5', function(){
        assert.deepEqual(functions.max(-4, -5), -4);
    });
           
    it('it should return 0.01 when numbers are 0.01 and 0.001', function(){
        assert.equal(functions.max(0.01, 0.001), 0.01);
    });
});

describe('head', function(){
    it ('it should return null when the array is empty', function(){
        let arr =[];
        assert.isNull(functions.head(arr));
    });
            
    it ('it should return [1] when the array is [1,2,3]', function(){
        let arr =[1,'2','3'];
        assert.equal(functions.head(arr),1);
    });
            
    it ('it should return hey when the array is [hello,Hi]', function(){
        let arr =['hello','hi'];
        assert.equal(functions.head(arr),'hello');
    });
});              
       

describe('tail', function(){
    it ('it should return null when the array is empty', function(){
        let arr =[];
        assert.isNull(functions.tail(arr));
    });

    it ('it should return 3 when the array is [1,2,3]', function(){
        let arr =[1,2,3];
        assert.equal(functions.tail(arr),3);
    });

    it ('it should return hi when the array is [hello,hi]', function(){
        let arr =['hi'];
        assert.equal(functions.tail(arr),'hi');
    });
});

describe('mid', function(){
    it ('it should return null when the array is empty', function(){
        let arr =[];
        assert.isNull(functions.mid(arr));
    });

    it ('it should return [2,3] when the array is[1,2,3,4]', function(){
        let arr =[1,2,3,4];
        assert.deepEqual(functions.mid(arr),[2,3]);
    });

    it ('it should return [2] when the array is [1,2,3]', function(){
        let arr =[1,2,3];
        assert.deepEqual(functions.mid(arr),2);
    });
});

describe('total', function(){
    it ('it should return null when the array is empty', function(){
        let arr =[];
        assert.isNull(functions.total(arr));
    });

    it ('it should return [6] when the array is [1,2,3]', function(){
        let arr =[1,2,3];
        assert.equal(functions.total(arr),6);
    });

    it ('it should return [6] when the array is [1,2,3]', function(){
        let arr =[6];
        assert.equal(functions.total(arr),[6]);
    });
});

describe('average', function(){
    it ('it should return null when the array is empty', function(){
        let arr =[];
        assert.isNull(functions.average(arr));
    });

    it ('it should return 4 when the array is [2,4,6]', function(){
        let arr =[2,4,6];
        assert.equal(functions.average(arr),4);
    });

    it ('it should return 5 when the array is [2.5,4.5,8]', function(){
        let arr =[2.5,4.5,8];
        assert.equal(functions.average(arr),[5]);
    });
});

describe('smallest', function(){
    it ('it should return null when the array is empty', function(){
        let arr =[];
        assert.isNull(functions.smallest(arr));
    });

    it ('it should return 1 when the array is [2,1,5]', function(){
        let arr =[2,1,5];
        assert.equal(functions.smallest(arr),1);
    });

    it ('it should return 2.5 when the array is [8.0,4.5,2.5]', function(){
        let arr =[8.0,4.5,2.5];
        assert.equal(functions.smallest(arr),[2.5]);
    });
});

describe('largest', function(){
    it ('it should return null when the array is empty', function(){
        let arr =[];
        assert.isNull(functions.largest(arr));
    });

    it ('it should return 5 when the array is [2,1,5]', function(){
        let arr =[2,1,5];
        assert.equal(functions.largest(arr),5);
    });

    it ('it should return 8 when the array is [8.0,4.5,2.5]', function(){
        let arr =[8.0,4.5,2.5];
        assert.equal(functions.largest(arr),8);
    });
});

describe('merge', function(){
    it('it should return null when both the arrays are empty', function(){
        let arr1 = [];
        let arr2 = [];
        assert.isNull(functions.merge(arr1,arr2));
    });

    it('it should return [2,3,4,5,6,7] when arrays are [2,4,6] and [3,5,7] ', function(){
        let arr1 = [2,4,6];
        let arr2 = [3,5,7];
        assert.deepEqual(functions.merge(arr1,arr2), [2,3,4,5,6,7]);
    });

    it('it should return [2,4,6] when merging [2,4,6] and []', function(){
        let arr1 = [2,4,6];
        let arr2 = [];
        assert.deepEqual(functions.merge(arr1,arr2), [2,4,6]);
    });

});
