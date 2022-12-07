import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { SignIn } from "./Signin";
import { About } from "./About";
import { Home } from "./HomeScreen";
import { AddExpense } from "./AddExpense";
import { AddIncome } from "./AddIncome";
import { Quizzes } from "./Quizzes";
import { Favourites } from "./Favourites";

const Stack = createNativeStackNavigator();

export function StackNavigator (){
    return (
        <Stack.Navigator initialRouteName= 'Favs'  options={{headerShown:false}}>
            <Stack.Screen name="Home" component={Home}/> 
            <Stack.Screen name="SignIn" component={SignIn}/>
            <Stack.Screen name="About" component={About}/>
            <Stack.Screen name="Add Expense" component={AddExpense}/>
            <Stack.Screen name="Add Income" component={AddIncome} options={{headerShown:true}}/>
            <Stack.Screen name="Quizzes" component={Quizzes}/>
            <Stack.Screen name="Favs" component={Favourites}/>
        </Stack.Navigator>
    )
}