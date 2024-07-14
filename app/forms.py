from django.contrib.auth import forms as forms0
from django.contrib.auth.models import User
from django import forms
from .models import *

class SignupForm(forms0.UserCreationForm):
    class Meta:
        model = User
        fields = ['username','email','password1','password2']

class ProductForm(forms.ModelForm):
    class Meta:
        model = Products
        fields = '__all__'
        