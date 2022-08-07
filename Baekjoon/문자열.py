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
