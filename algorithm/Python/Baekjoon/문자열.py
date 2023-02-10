##
#11654
n = input()
print(ord(n))


##
#11720
#내가 생각한 코드
n = int(input())
num = map(int, input().split())

for i in range(n):
    print(sum(i))
    
    
#정답
#int는 iterable 하지 않기 때문에 total에 합쳐줄 때 int로서 합쳐주기
n = input()
num = input()
total = 0

for i in num:
    total += int(i)
    print(total)
    

##
#10809
#정답 : 어렵따,, 
#find 함수는 찾는 문자가 문자열 안에 포함되지 않은 경, -1을 출력하지만
#index 함수는 AttributeError를 발생시킴

word = input()
alphabet = list(range(97, 123)) #아스키코드 숫자 범위

for i in alphabet:
    print(word.find(chr(i))) #chr 함수로 숫자를 문자열로 변환 시켜 find 함수를 통해 해당 문자를 숫자로 변환


##
#2675
#내가 생각한 코드 : 줄바꿈 돼서 출력된다...
#AAA
#BBB
#CCC

s = input().split()

for i in str(s[1]):
    i = i * int(s[0])
    print(i)
    
    
#정답 : 첫번째에 테스트가 몇 개 돌아가는지 입력된다고! 써있다! 문제 잘 읽기
n = int(input())

for _ in range(n):
    cnt, word = input().split() #for문 안에 있으니까 cnt, word 각각 받을 수 있다
    for i in word:
        print(i * int(cnt), end='') #end=''를 이용해 한줄에 출력되도록 
    print() #for문이 끝나면 빈 함수로 줄넘김 / end=''를 사용하면 다음 입력값에 대한 줄바꿈이 되지 않음
 

##
#1157
#내가 생각한 코드
word = input()
alphabet = list(range(97, 123))

for i in alphabet:
    result = (word.find(chr(i)))
    #여기서 result에 담긴 알파벳별로 카운트를 해줘야할 것 같은데
    
    
#정답 : 어렵따아...
word = input().upper() #대문자로 바로 바꿔주기
unique_word = list(set(word)) #입력받은 문자열에서 중복값 제거

cnt_list = []
for i in unique_word:
    cnt = word.count(i)
    cnt_list.append(cnt) #count 숫자를 cnt_list에 append

if cnt_list.count(max(cnt_list)) > 1: #가장 많이 사용된 알파벳이 여러 개 존재
    print('?')

else:
    max_index = cnt_list.index(max(cnt_list)) #count 숫자 index
    print(unique_word[max_index])
    
    
##
#1152
#내가 생각한 풀이 : for문으로 돌려서 i를 count 해주면 된다고 생각했는데,, 1개가 나온다?
words = input().split()

for i in words:
    cnt = words.count(i)

print(cnt)

#정답 : count가 아니라 len이었다
words = input().split()

print(len(words))


##
#2908
#내가 생각한 코드 : 첫번째로 받은 수랑 두번째 받은 수를.. 어떻게 비교하지
num = map(int, input().split())

for i in num:
    if 
    
#정답
num1, num2 = input().split()

num1 = int(num1[::-1])
num2 = int(num2[::-1])

if num1 > num2:
    print(num1)

else:
    print(num2) 
    
    
##
#5622
#정답 : 어려워어어
alpabet = ['ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQRS', 'TUV', 'WXYZ']
word = input()

time = 0
for j in range(len(word)):
    for i in alpabet:
        if word[j] in i:
            time += alpabet.index(i) +3 #다이얼을 돌릴 때 1을 누르는데 2초가 걸리고, index는 0부터 시작하므로 3을 더해준다
            
print(time)

##
#2941
#정답 : 와오,, 어려워
#2,3글자로 이루어진 8개의 알파벳이 있는 경우 한 글자로 변환하고 이후에 변환된 문자열의 총 글자수를 센다

alphabet = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z=']
word = input()


for i in alphabet:
    word = word.replace(i, '*') #replace 함수는 함수를 사용한 문자열 원형을 변형시키지 않아 변수명을 똑같이 word로 작성. 알파벳이 있다면 *로 변형

print(len(word))


##
#1316
#내가 풀어본 코드
n = int(input())

for _ in range(n):
    word = input()
    for i in word:
        if word[i] == word[i+1]:

#정답 1
n = int(input())

group = 0
for _ in range(n):
    word = input()
    error = 0
    for i in range(0, len(word)-1): #인덱스 범위 0부터 단어개수 -1까지
        if word[i] != word[i+1]: #연속으로 된 두 글자가 다르다면
            new = word[i+1:] #현재 글자 이후 문자열을 새로운 단어로 
            if new.count(word[i]) > 0: #남은 문자열에 현재 글자가 있다면
                error += 1 
    if error == 0:
        group += 1 #error가 0이면 그룹단어

print(group)

#정답 2
n = int(input())
result = n

for _ in range(n):
    word = input()
    for i in range(0, len(word)-1):
        if word[i] == word[i+1]:
            pass
        elif word[i] in word[i+1]:
            result -= 1
            break

print(result)
##
