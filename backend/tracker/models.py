from django.db import models

class CalorieEntry(models.Model):
    food_name = models.CharField(max_length=255)
    calories = models.PositiveIntegerField()
    date = models.DateField(auto_now_add=True)

    def __str__(self):
        return f"{self.food_name} - {self.calories} kcal"
