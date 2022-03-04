def insertionSort(arr):

    for i in range(1, len(arr)):
        key = arr[i]
        
        j = i-1
        while j >= 0 and key < arr[j]:
            arr[j+1] = arr[j]
            j-=1
        arr[j+1] = key
    
arr = [6,5,3,1,8,7,2,4]
insertionSort(arr)
print("The sorted array is:")
for i in range(len(arr)):
    print ("%d" %arr[i])