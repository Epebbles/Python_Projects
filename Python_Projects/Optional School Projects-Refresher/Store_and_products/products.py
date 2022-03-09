class Product:
    def __init__(self, name, price, catagory):
        self.name = name
        self.price = price
        self.catagory = catagory
        
    def update_price(self, percent_change, is_increased):
        if is_increased:
            self.price += self.price * percent_change/100
        elif not is_increased:
            self.price -= self.price * percent_change/100
        return self
        
    def print_info(self):
        print("Product name:", self.name, "\n", "Price:", self.price, "\n", f"*"*80, "\n", "Category:", self.catagory)
        return self