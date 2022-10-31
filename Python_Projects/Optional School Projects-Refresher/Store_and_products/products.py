class Product:
    def __init__(self, name, price, category):
        self.name = name
        self.price = price
        self.category = category
        
    def update_price(self, percent_change, is_increased):
        if is_increased:
            self.price += self.price * percent_change/100
        elif not is_increased:
            self.price -= self.price * percent_change/100
        return self
        
    def print_info(self):
        print("Product name:", self.name,"\n", "Price:", self.price, "\n", "Category:", self.category)
        return self
        

coffeeCup = Product(name="coffee cup", price=25, category="Cups")
headphones = Product(name="Corsair Virtuoso", price=275, category="Headphones")
animal = Product(name="Kevin", price=300, category="Dog")