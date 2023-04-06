//https://chamdom.blog/queue-using-js/

export class Queue {
    constructor(){
        this.store = {}; //데이터를 저장하는 객체
        this.front = 0;  // 첫 번째 데이터를 가리키는 포인터
        this.rear = 0;  // 마지막 데이터를 가리키는 포인터
    }

    size() {
        //rear가 가리키는 값이 없다면 큐에는 데이터가 없다는 것이다.
        if(this.store[this.rear] === undefined){
            return 0;
        }
        else {
            return this.rear - this.front + 1;
        }
    }

    push(value) {
        //큐에 데이터가 존재하지 않을 경우
        if(this.size === 0){
            this.store['0'] = value;
        }
        //큐에 데이터가 존재할 경우
        else {
            this.rear += 1;
            this.store[this.rear] = value;
        }
    }

    popleft(){
        let temp;
        //큐에 데이터가 1개 존재하거나 데이터가 없는 경우
        if(this.front === this.rear){
            temp = this.store[this.front];
            delete this.store[this.front];
            this.front = 0;
            this.rear = 0;
            return temp;
        }
        else {
            temp = this.store[this.front];
            delete this.store[this.front];
            this.front += 1;
            return temp;
        }
    }
}