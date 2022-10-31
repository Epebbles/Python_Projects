import store
import products

target = store.Store(name="Target")
coffeeCup = products.Product(name="coffee cup", price=25, category="Cups")
headphones = products.Product(name="Corsair Virtuoso", price=275, category="Headphones")
animal = products.Product(name="Kevin", price=300, category="Dog")

target.add_product(coffeeCup).add_product(headphones).add_product(animal)

# target.sell_product(1).set_clearance(50).sell_product(0)