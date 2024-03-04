# EJERCICIO 1
Tres personas deciden invertir su dinero para fundar una empresa. Cada una de ellas invierte una cantidad distinta. Obtener el porcentaje que cada quien invierte con respecto a la cantidad total invertida.

````
INICIO

# Entrada de datos 
inversion1 = float(input("Ingrese la primera inversion "))
inversion2 = float(input("Ingrese la segunda inversion: "))
inversion3 = float(input("Ingrese la tercera inversion : "))

# proceso 
total = (inversion1 + inversion2 + inversion3)

# Salida de datos 
print("El total de la inversion es de : ", total)
print("El porcentraje de la primera inversion es de : ", inversion1 * 100 )/total,"%"
print("El porcentraje de la segunda inversion es de : ", inversion2 * 100 )/total,"%"
print("El porcentraje de la tercera inversion es de : ", inversion3 * 100 )/total,"%"

FIN

````

```
INICIO
inversion1 = 0.0
inversion2= 0.0
inversion3 = 0.0 
total = 0.0 

# Entrada de datos 
inversion1 = float(input("Ingrese la primera inversion "))
inversion2 = float(input("Ingrese la segunda inversion: "))
inversion3 = float(input("Ingrese la tercera inversion : "))

# proceso 
total = (inversion1 + inversion2 + inversion3)

# Salida de datos 
print("El total de la inversion es de : ", total)
print("El porcentraje de la primera inversion es de : ", inversion1 * 100 )/total,"%"
print("El porcentraje de la segunda inversion es de : ", inversion2 * 100 )/total,"%"
print("El porcentraje de la tercera inversion es de : ", inversion3 * 100 )/total,"%"

FIN

```

# EJERCICIO 2
Un alumno desea saber cuál será su promedio general en las tres materias más difíciles que cursa y cuál será el promedio que obtendrá en cada una de ellas. Estas materias se evalúan como se muestra a continuación:

La calificación de Matemáticas se obtiene de la siguiente manera: Examen 90% Promedio de tareas 10% En esta materia se pidió un total de tres tareas.

La calificación de Física se obtiene de la siguiente manera: Examen 80% Promedio de tareas 20% En esta materia se pidió un total de dos tareas.

La calificación de Química se obtiene de la siguiente manera: Examen 85% Promedio de tareas 15% En esta materia se pidió un promedio de tres tareas.
```
INICIO
promediogneral= 0.0
proM= 0.0
promF = 0.0 
promQ = 0.0
examenF= 0.0
examenQ= 0.0
tareasM = 0.0 
tareasF = 0.0
tareasQ= 0.0
tm1= 0.0
tm2 = 0.0 
tm3 = 0.0
f1 = 0.0
f2= 0.0
q1= 0.0
q2 = 0.0 
q3 = 0.0
porceEM = 0.0
porcenTM = 0.0
porcenTF= 0.0
porcenEF= 0.0
porcenTQ = 0.0 
porcenEQ = 0.0


Escribir"Ingrese el puntaje obtenido en el examen de matematicas"
Leer examenM
Escribir"Ingrse el puntaje obtenido en la tarea1 de matematicas"
Leer tm1
Escribir"Ingrese el puntaje obtenido en la tarea2 de matematicas"
Leer tm2
Escribir"Ingrese el puntaje obtenido en la tarea3 de matematica"
Leer tm3
Escribir"Ingrese el puntaje obtenido en el examen de fisica"
Leer examenF
Escribir"Ingrese el puntaje obtenido en la tarea1 de fisica"
Leer f1
Escribir"Ingrese el puntaje obtenido en la tarea2 de fisica"
Leer f2
Escribir"Ingrese el puntaje obtenido en el examen de quimica"
Leer examenQ
Escribir"Ingrese el puntaje obtenido en la tarea1 de quimica"
Leer q1
Escribir"Ingrese el puntaje obtenido en la tarea2 de quimica"
Leer q2

porcenTM= (tm1+tm2+tm3)/3
promM = (examenM*0,9)+(promediogeneral*0.1)
porcenTF = (f1+f2)/2
promF = (examenF*0.8)+(porcenTF*0.2)
porcentTQ = (q1+q2+q3)/3
promQ = (examenQ*0.85)+(porcenTQ*0.15)
promediogeneral = (proM+promF+promQ)/3

escribir ("El promedio de matematicas es de",proM)
escribir ("El promedio de fisica es de",promF)
escribir ("El promedio de quimica es de",promQ)
escribir ("El promedio total de las tres materias es de",promediogeneral)

FIN

```
