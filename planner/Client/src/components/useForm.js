import {useState} from 'react';

const useForm = (callback) => { //callback = register();
    //Hook for state variable and function to update state variable
    const [values,
        setValues] = useState({});

    const handleChange = (event) => {
        // console.log("handle Change", event); calling event.persist() allows
        // references to the event to occur asynchronously
        event.persist();

        // ...values is using spread syntax to combine multiple key-value pairs in the
        // values object event refers to onChange event, target refers to event target,
        // name refers to input name, value refers to what is being stored in input
        // setValues(values => (console.log(values),{...values, [event.target.name]:
        // event.target.value }));
    };

    const handleSubmit = (event) => {
        // console.log("handle submit", event); prevent defaults behavior of onSubmit,
        // which is page refresh
        event.preventDefault();

        //calls callback function passed to useForm i.e. register()
        callback();
    };

    return {values, handleChange, handleSubmit}
};

export default useForm;