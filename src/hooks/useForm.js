// write your custom hook here to control your checkout form
import { useState } from "react";
import PlantList from "../components/PlantList";

export const useForm = (initialValue) => {
    const [cart, setCart] = useState(initialValue);

  const addToCart = (plant) => {
    setCart([...cart, plant]);
  }

    const removeFromCart = plant => {
        setCart(cart.filter((p) => p.id !== plant.id))
    }
    return [cart, setCart, addToCart, removeFromCart]
}
