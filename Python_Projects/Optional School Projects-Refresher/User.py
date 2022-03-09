from distutils.command.build_scripts import first_line_re


class User:
    def __init__(self, first, last):
        self.first = first
        self.last = last
        self.email = first + '.' + last + '@bend.com'
        self.account_balance = 0
        
    def make_deposit(self, amount):
        self.account_balance += amount
        

evan = User("Evan", "Pebbles")
cheryl = User("Cheryl", "Chapman")

evan.make_deposit(700)
cheryl.make_deposit(750)


print(evan.email)
print(cheryl.account_balance)
