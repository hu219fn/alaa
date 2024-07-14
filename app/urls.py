from django.urls import path
from .views import *
from django.contrib.auth import views as authViews

urlpatterns = [
    path('', index, name='index'),
    path('register/', SignupView.as_view(), name='register'),
    path('register/login/', authViews.LoginView.as_view(template_name='auth/login.html'), name='login'),
    path('register/logout/', Logout, name='logout'),
    path('register/change-password/', authViews.PasswordChangeView.as_view(template_name='auth/change-password.html', success_url='done/'), name='change-password'),
    path('register/change-password/done/', authViews.PasswordChangeDoneView.as_view(template_name='auth/change-password-done.html'), name='password-change-done'),
    path('search/', Search.as_view(), name='search'),
    path('<int:id>/', detail, name='detail'),
    path('orders/', orders, name='orders'),
    path('order-delete/<int:id>/', order_delete, name='order-delete'),
    path('management/', management, name='management'),
    path('management/product-add/', Product_add.as_view(), name='product-add'),
    path('management/product-orders/<int:id>/', product_order, name='product-order'),
    path('management/product-edit/<int:pk>/', Product_edit.as_view(), name='product_edit'),
    path('management/product-delete/<int:id>/', product_delete, name='product_delete'),
    path('management/users/', users, name='users'),
    path('management/users/<int:id>/', user, name='user'),
    path('management/users/delete/<int:id>/', users_delete, name='users_delete'),
    path('management/users/search/', Search_user.as_view(), name='search-user'),
    path('management/users/search-ar/', Search_user0.as_view(), name='search-user-ar'),
    ###########
    path('mini/', mini, name='mini'),
    path('classic/', classic, name='classic'),
    path('cards/', cards, name='cards'),
    path('wood/', wood, name='wood'),
    path('accessories/', accessories, name='accessories'),
    path('key-chain/', key_chain, name='key-chain'),
    path('phone-bag/', phone_bag, name='phone_bag'),
]
