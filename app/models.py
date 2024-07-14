from django.db import models
from django.contrib.auth.models import User

class Products(models.Model):
    title = models.CharField(max_length=100)
    caption = models.TextField(max_length=200, null=True, blank=True)
    price = models.FloatField()
    sell = models.FloatField(null=True, blank=True)
    category = models.CharField(max_length=50, choices={('Mini','Mini'),('Classic','Classic'),('Cards','Cards'),('Wood','Wood'),('Accessories','Accessories'),('Key Chain','Key Chain'),('Phone Bag','Phone Bag')})
    photo = models.ImageField(upload_to='products/')
    date = models.DateField(auto_now_add=True)
    class Meta :
        ordering = ["-date"]

class Order(models.Model):
    title = models.CharField(max_length=100)
    caption = models.TextField(max_length=200, null=True, blank=True)
    price = models.FloatField()
    sell = models.FloatField(null=True, blank=True)
    category = models.CharField(max_length=50, choices={('Mini','Mini'),('Classic','Classic'),('Cards','Cards'),('Wood','Wood'),('Accessories','Accessories'),('Key Chain','Key Chain'),('Phone Bag','Phone Bag')})
    photo = models.ImageField(upload_to='products/')
    date = models.DateField(auto_now_add=True)
    count = models.IntegerField()
    number = models.IntegerField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    class Meta :
        ordering = ["-date"]
