import unittest

def reverseList(my_list):
    my_list = [1,4,5,8]
    my_list.reverse()
    print(my_list)

class reverseListTest(unittest.TestCase):
    def testOne(self):
        self.assertEqual(reverseList([1,3,5]), [5,3,1])
    def testTwo(self):
        self.assertEqual(reverseList([1,2,3]), [3,2,1])
    def testThree(self):
        self.assertEqual(reverseList([10,3,4,6]), [6,4,3,10])
    def testFour(self):
        self.assertEqual(reverseList([5,1,3,7]), [7,3,1,5])
    def setUp(self):
        print("running setUp")
    def tearDown(self):
        print("running tearDown tasks")


def isPalindrome(racecar):
    letters = list(racecar)
    is_palindrome = True
    
    for letter in letters:
        if letter == letters[-1]:
            letters.pop(-1)
        else:
            is_palindrome = False
            break
    return is_palindrome

class isPalindromeTest(unittest.TestCase):
    def testOne(self):
        self.assertEqual(isPalindrome("racecar"), True)
    def testTwo(self):
        self.assertTrue(isPalindrome("racecar"))
    def testThree(self):
        self.assertFalse(isPalindrome("rabcr"))
        
    
    
def minNumOfCoins(cents):
    coins = [25,10,5,1]
    count = 0
    for coin in coins:
        while cents >= coin:
            cents = cents - coin
            count = count + 1
    
    return count

class minNumOfCoinsTest(unittest.TestCase):
    def testOne(self):
        self.assertEqual(minNumOfCoins(87), [3,1,0,2])
        
    def testTwo(self):
        self.assertEqual(minNumOfCoins(66), [2,1,1,1])
        
if __name__ == '__main__':
    unittest.main()