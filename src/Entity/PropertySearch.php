<?php

namespace App\Entity;

class PropertySearch{

    /**
     * @var int|null
     */
    private $product_envergure;

    /**
     * @var int|null
     */
    private $product_surface;

    
    /**
     * Get the value of product_envergure
     * @return int|null
     */ 
    public function getProductEnvergure(): ?int
    {
        return $this->product_envergure;
    }


    /**
     * Set the value of product_envergure
     * @param int|null $product_envergure
     * @return self
     */ 
    public function setProductEnvergure($product_envergure): PropertySearch
    {
        $this->product_envergure = $product_envergure;

        return $this;
    }

    /**
     * Get the value of product_surface
     * @return  int|null
     */ 
    public function getProductSurface(): ?int
    {
        return $this->product_surface;
    }

    /**
     * Set the value of product_surface
     * @param  int|null  $product_surface
     * @return  self
     */ 
    public function setProductSurface($product_surface): PropertySearch
    {
        $this->product_surface = $product_surface;

        return $this;
    }
}