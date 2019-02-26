interface Collection {
  name?: string;
  state?: string;
}

function getPromise(index, delay) {  // something async returning a promise
    return new Promise ((resolve, reject) => {
        let timeOut = () => {
          resolve(index);  // resolve with parameter value passed
        }
        setTimeout(timeOut, delay);
    });
}


export default function cascadeAnimation(collection: Collection[], index: number = 0, initialDelay: number = 0, delay: number = 150) {
    // do whatever synchronous stuff when called
    function decide( asyncResult) {  // process async result and decide what to do
        // do something with asyncResult
        if (index >= collection.length)
            return true; // all done

        // console.log("asyncResult: " + asyncResult);
        collection[index].state = 'final';
        // decide if further recursion needed
        return cascadeAnimation(collection, ++index, 0, delay); // not all done, recurse
    }

    // return a promise resolved by doing something async and deciding what to do with it
    // to be clear the returned promise is the one returned by .then
    return getPromise(index, delay).then(decide);
}
