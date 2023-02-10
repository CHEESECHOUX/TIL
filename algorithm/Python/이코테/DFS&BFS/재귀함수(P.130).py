##
#재귀 함수 예제
def recursive_function():
    print('재귀 함수를 호출합니다.')
    recursive_function()

recursive_function()

#재귀 함수 종료 예제 : 스택과 같다고 이해하면 됨!
def recursive_function(i):
    #100번째 출력했을 때 종료 되도록 종료 조건 명시
    if i == 100:
        return
    print(i, '번째 재귀 함수에서', i + 1, '번째 재귀 함수를 호출합니다.')
    recursive_function(i + 1)
    print(i, '번째 재귀 함수를 종료합니다.') #100번째에서 종료되고 역순으로 1번까지 함수가 종료됨

recursive_function(1)

#2가지 방식으로 구현한 팩토리얼 예제
#반복적으로 구현한 n!
def factorial_interative(n):
    result = 1
    #1부터 n까지의 수를 차례대로 곱하기
    for i in range(1, n+1):
        result *= i
    return result

#재귀적으로 구현한 n!
def factorial_recursive(n):
    #n이 1이하인 경우 1을 반환
    if n<= 1:
        return 1
    #n! = n * (n - 1)!를 그대로 코드로 작성하기
    return n * factorial_recursive(n - 1)

#각각의 방식으로 구현한 n! 출력(n = 5)
print('반복적으로 구현:', factorial_interative(5))
print('재귀적으로 구현:', factorial_recursive(5))
##
