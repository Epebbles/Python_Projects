class Store:
    def __init__(self, name, products=[]):
        self.name = name
        self.products = products
        
    def add_product(self, new_product):
        self.products.append(new_product)
        return self
    
    def inflation(self, percent_increase):
        for product in self.products:
            product.update_price(percent_increase, True)
            return self
    
    def set_clearance(self, percent_discount):
        for product in self.products: 
            product.update_price(percent_discount, False)
    
    def sell_product(self, id):
        self.products[id].print_info()
        del self.products[id]
        return self


if __name__ == "__main__":
    print("The file is being executed directly")
else:
    print("The file is being executed because it is imported by another file. The file is called: ", __name__)
        
    

