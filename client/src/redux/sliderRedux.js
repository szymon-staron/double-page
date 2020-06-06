/* Selectors */

export const gettAll =({slider})=> slider;
export const getCount =({slider})=>slider.lenght;


/* reducer */

export default function reducer(statePart =[],action ={}) {
    switch (action.type) {
        default:
            return statePart;
    }
}
