import { ADD_ANVENTORY,
  GET_ANVERTORY,
  UPDATE_ANVERTORY,
  DELETE_ANVERTORY,
  SELECT_ANVERTORY,
  CLEAR_ANVERTORY,
  DELETE_SELECT_ANVERTORY
 } from '../constant/type';
const inialState={
  anventory:[
    {
      "id": 1,
      "name": "Fiayaz Alam",
      "email": "fiayaz52@gmail.com",
      "mobile":"8553586797",
      "city":"Bangalore"
      },
      {
        "id": 2,
        "name": "Amal Raj",
        "email": "amalraj@gmail.com",
        "mobile":"22-11-33-44",
        "city":"Bangalore"
        },
        {
          "id": 3,
          "name": "Leanne Graham",
          "email": "leanne@gmail.com",
          "mobile":"11-22-333-44",
          "city":"Kolkata"
          },
          {
            "id": 4,
            "name": "Ervin Howell",
            "email": "ervine@gmail.com",
            "mobile":"11-22-333-44",
            "city":"Chennai"
            },
            {
              "id": 5,
              "name": "Raj Kumar",
              "email": "rajkumar@gmail.com",
              "mobile":"334-22-333-44",
              "city":"Hyderabad"
            },
            {
              "id": 6,
              "name": "Clementine Bauch",
              "email": "clementine@gmail.com",
              "mobile":"114-22-333-44",
              "city":"Bangalore"
            },

      
  ],
 
  anventorys:null,
  selectedAnventorys:[],
};
export const AnventoryReducer = (state = inialState , action)=>{

    switch( action.type){
      case ADD_ANVENTORY:
        return{
          ...state,
          anventory:[action.payload,...state.anventory]
        }
        case GET_ANVERTORY:
          let arr = state.anventory.filter((anventorys)=> anventorys.id == action.payload);
          arr=arr.values();
          for(let val of arr){
            arr = val ;
          }
          return{
            ...state,
            anventorys:arr,
          };
          case UPDATE_ANVERTORY:
            return{
              ...state,
              anventory:state.anventory.map(anventory => anventory.id == action.payload.id ? action.payload:anventory),
            }
            case DELETE_ANVERTORY:
              return{
                ...state,
                anventory:state.anventory.filter((anventory)=>anventory.id !=action.payload)
              }
              case SELECT_ANVERTORY:
                return {
                  ...state,
                  selectedAnventorys: action.payload,
                }
              case CLEAR_ANVERTORY:
                return {
                  ...state,
                  selectedAnventorys:[]
                }
              case DELETE_SELECT_ANVERTORY:
                return{
                  ...state,
                  anventory:[]
                } 
        default:
        return state
    }
};

