##
#15596
def solve(a):
  return sum(a)

#for문을 활용한 답
def solve(a):
  total = 0
  for i in a:
    total += i
  return total


##
#4673
#정답... 
numbers = set(range(1, 10000))
remove_set = set() 
for num in numbers:
    for n in str(num): #int형태로는 각 자릿수를 분리시킬 수 없기 때문에 문자열로 변환
        num += int(n) #각 자릿수를 합한 수를 num 변수에 선언
    remove_set.add(num)

self_numbers = numbers - remove_set #전체 숫자에서 생성자가 있는 숫자의 집합을 빼주기
for self_num in sorted(self_numbers): #내림차순 정렬
    print(self_num)
    
    
##
#1065

#1~99는 모두 한수
#i가 100이상인 경우, 세자리 숫자를 분리해 앞의 두 자리 수의 차이와 뒤의 두 자리 수의 차이가 같으면 한수

#정답 ... 어렵따
def hansu(num):
    count = 0
    for i in range(1, num+1):
        num_list = list(map(int, str(i)))
        if i < 100:
            count += 1
        elif num_list[0] - num_list[1] == num_list[1] - num_list[2]:
            count += 1
    return count

num = int(input())
print(hansu(num))

#함수를 생성하지 않은 정답
num = int(input())

hansu = 0
for i in range(1, num+1):
    num_list = list(map(int, str(i)))
    if i < 100:
        hansu += 1 #100보다 작으면 모두 한수 
    elif num_list[0] - num_list[1] == num_list[1] - num_list[2]:
        hansu += 1

print(hansu)
##
