class Mathdojo:
    def __init__(self):
        self.result = 0
    def add(self, num, *nums):
        pass
    def subtract(self, num, *nums):
        pass
    
md = Mathdojo()

x = md.add(2).add(2,5,1).subtract(3,2).result
print(x)