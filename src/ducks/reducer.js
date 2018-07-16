const initialState = {
  name: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  img: "",
  mortgage: "",
  rent: ""
};

const NAME = "NAME";
const ADDRESS = "ADDRESS";
const CITY = "CITY";
const STATE = "STATE";
const ZIP = "ZIP";
const IMG = "IMG";
const MORTGAGE = "MORTGAGE";
const RENT = "RENT";
const RESET = "RESET";

export function handleName(name) {
  return {
    type: NAME,
    payload: name
  };
}

export function handleAddress(address) {
  return {
    type: ADDRESS,
    payload: address
  };
}

export function handleCity(city) {
  return {
    type: CITY,
    payload: city
  };
}

export function handleState(state) {
  return {
    type: STATE,
    payload: state
  };
}

export function handleZip(zip) {
  return {
    type: ZIP,
    payload: zip
  };
}

export function handleImg(img) {
  return {
    type: IMG,
    payload: img
  };
}

export function handleMortgage(mortgage) {
  return {
    type: MORTGAGE,
    payload: mortgage
  };
}

export function handleRent(rent) {
  return {
    type: RENT,
    payload: rent
  };
}

export function reset() {
  return {
    type: RESET,
    payload: ""
  };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case NAME:
      return {
        ...state,
        name: action.payload
      };
    case ADDRESS:
      return {
        ...state,
        address: action.payload
      };
    case CITY:
      return {
        ...state,
        city: action.payload
      };
    case STATE:
      return {
        ...state,
        state: action.payload
      };
    case ZIP:
      return {
        ...state,
        zip: action.payload
      };
    case IMG:
      return {
        ...state,
        img: action.payload
      };
    case MORTGAGE:
      return {
        ...state,
        mortgage: action.payload
      };
    case RENT:
      return {
        ...state,
        rent: action.payload
      };
    case RESET:
      return {
        state: action.payload
      };
    default:
      return state;
  }
}
