import store
import products

slaveway = store.Store(name="Slaveway")
hifiman = products.Product(name="Hifiman", price=100, catagory="headphone")
sundara = products.Product(name="Sundara", price=600, catagory="headphone")
hyperX = products.Product(name="HyperX", price=89, catagory="microphone")

slaveway.add_product(hifiman).add_product(sundara).add_product(hyperX)

slaveway.sell_product(0).set_clearance(50).sell_product(0)