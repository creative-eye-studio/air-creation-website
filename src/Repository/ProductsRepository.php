<?php

namespace App\Repository;

use App\Classes\DocSearch;
use App\Classes\ProductsSearch;
use App\Entity\Products;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\Query;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Products>
 *
 * @method Products|null find($id, $lockMode = null, $lockVersion = null)
 * @method Products|null findOneBy(array $criteria, array $orderBy = null)
 * @method Products[]    findAll()
 * @method Products[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ProductsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Products::class);
    }

    public function add(Products $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Products $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function findForPagination()
    {
        $qb = $this->createQueryBuilder('a');
        
        return $qb->getQuery();
    }

    /**
     * @return void
     */
    public function getPaginatedProducts($filters_capacity = null, $filter_wing = null, $filter_tricycle = null, $filter_name = null)
    {
        $query = $this->createQueryBuilder('p');

        if ($filters_capacity != null) {
            $query->andWhere('a.product_capacity IN(:caps)')
                ->setParameters(':caps', $filters_capacity)
            ;
        }

        if ($filter_wing != null) {
            $query->andWhere('a.product_wing IN(:wings)')
                ->setParameters(':wings', $filter_wing)
            ;
        }

        if ($filter_tricycle != null) {
            $query->andWhere('a.product_tricycle IN(:tri)')
                ->setParameters(':tri', $filter_tricycle)
            ;
        }

        if ($filter_name != null) {
            $query->andWhere('a.product_name IN(:name)')
                ->setParameters(':name', $filter_name)
            ;
        }

        $query->orderBy('p.product_name', 'ASC');

        return $query->getQuery()->getResult();
    }

    /**
     * Requète pour récupérer les produits selon la recherche
     */
    public function findWithSearch(ProductsSearch $search)
    {
        $query = $this
            ->createQueryBuilder('p')
            ->select('p')
        ;

        if (!empty($search->filter_capacity)) {
            $query = $query
                ->andWhere('p.product_capacity IN (:filter_capacity)')
                ->setParameter('filter_capacity', $search->filter_capacity)
            ;
        }

        if (!empty($search->filter_wing)) {
            $query = $query
                ->andWhere('p.product_wing IN (:filter_wing)')
                ->setParameter('filter_wing', $search->filter_wing)
            ;
        }

        return $query->getQuery()->getResult();
    }

    /**
     * Requète pour récupérer les produits selon la recherche
     */
    public function findDocWithSearch(DocSearch $search)
    {
        $query = $this
            ->createQueryBuilder('p')
            ->select('p')
        ;

        if (!empty($search->filter_wing)) {
            $query = $query
                ->andWhere('p.product_wing IN (:filter_wing)')
                ->setParameter('filter_wing', $search->filter_wing)
            ;
        }

        if (!empty($search->filter_name)) {
            $query = $query
                ->andWhere('p.product_name IN (:filter_name)')
                ->setParameter('filter_name', $search->filter_name)
            ;
        }

        return $query->getQuery()->getResult();
    }

//    /**
//     * @return Products[] Returns an array of Products objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('p.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?Products
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
