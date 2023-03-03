# Home_Goods_Store
julioeusebiovs@gmail.com
This HTML and CSS code for a Home Goods store. I'm trying to create a Category Page for each of the categories on the home page. The categories each contain ten items in a grid with a add to cart button for each. I want to generate a base template for the page and use javascript to fill in the page for each section. Please generate a base template using the same nav bar and footer. In a future I'll ask you for the JS

html:
<!DOCTYPE html>
<html>
<head>
	<title>Home Goods Store</title>
	<link rel="stylesheet" type="text/css" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<body>
	<header>
		<h1>Home Goods Store</h1>
		<nav>
			<ul>
				<li><a href="#">About Us</a></li>
				<li><a href="#">Contact Us</a></li>
				<li><a href="#"><i class="fa fa-shopping-cart"></i> <span class="cart-items">0</span></a></li>
			</ul>
		</nav>
	</header>

	<main>
        <section>
            <img src="pictures/home_page/furniture.jpg" alt="Furniture">
            <h2>Furniture</h2>
            <p>Shop our wide selection of stylish and comfortable furniture for your home.</p>
            <a href="#">Shop Now</a>
        </section>
        <section>
            <img src="pictures/home_page/decor.jpg" alt="Decor">
            <h2>Decor</h2>
            <p>Add the finishing touches to your home with our collection of decorative items.</p>
            <a href="#">Shop Now</a>
        </section>
        <section>
            <img src="pictures/home_page/kitchenware.jpg" alt="Kitchenware">
            <h2>Kitchenware</h2>
            <p>Find everything you need to cook, bake, and entertain in our kitchenware section.</p>
            <a href="#">Shop Now</a>
        </section>
        <section>
            <img src="pictures/home_page/bedding.jpg" alt="Bedding">
            <h2>Bedding</h2>
            <p>Get a good night's sleep with our selection of comfortable and stylish bedding.</p>
            <a href="#">Shop Now</a>
        </section>
    </main>
	<footer>
		<p>&copy; 2023 Home Goods Store. All rights reserved.</p>
		<div class="footer-links">
			<a href="#">Privacy Policy</a>
			<a href="#">Terms and Conditions</a>
		</div>
	</footer>
</body>
</html>

css:
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: Arial, sans-serif;
    background-color: #f7f7f7;
  }
  
  header {
    background-color: #8a2be2;
    color: #fff;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  nav ul {
    list-style: none;
    display: flex;
  }
  
  nav ul li {
    margin-right: 20px;
  }
  
  nav ul li:last-child {
    margin-right: 0;
  }
  
  nav ul li a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    text-transform: uppercase;
    transition: all 0.3s ease;
  }
  
  nav ul li a:hover {
    color: #f7f7f7;
  }
  
  main {
    max-width: 1200px;
    margin: 0 auto;
    padding: 50px 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 40px;
  }
  
  section {
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    padding: 20px;
    text-align: center;
    transition: all 0.3s ease;
    position: relative;
    display: flex;
    flex-direction: column;
  }
  
  section img {
    width: 100%;
    flex: 1;
    object-fit: cover;
    margin-bottom: 20px;
  }
  
  section:hover {
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    transform: translateY(-5px);
  }
  
  section h2
  {
    color: #8a2be2;
    font-size: 24px;
    margin-bottom: 10px;
    }
    
    section p {
    font-size: 16px;
    margin-bottom: 20px;
    }
    
    section a {
    display: inline-block;
    background-color: #8a2be2;
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
    transition: all 0.3s ease;
    }
    
    section a:hover {
    background-color: #fff;
    color: #8a2be2;
    }


    
    footer {
    background-color: #eee;
    color: #333;
    padding: 20px;
    text-align: center;
    font-size: 14px;
    margin-top: 50px;
    }

    footer .footer-links {
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
      }
      
      footer .footer-links a {
        color: #8a2be2;
        text-decoration: none;
        margin: 0 10px;
      }
      
      footer .footer-links a:hover {
        text-decoration: underline;
      }
      