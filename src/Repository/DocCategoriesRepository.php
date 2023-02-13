<?php

namespace App\Repository;

use App\Classes\DocSearch;
use App\Entity\DocCategories;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<DocCategories>
 *
 * @method DocCategories|null find($id, $lockMode = null, $lockVersion = null)
 * @method DocCategories|null findOneBy(array $criteria, array $orderBy = null)
 * @method DocCategories[]    findAll()
 * @method DocCategories[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class DocCategoriesRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, DocCategories::class);
    }

    public function save(DocCategories $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(DocCategories $entity, bool $flush = false): void
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
    public function getPaginatedProducts($wing = null, $tricycle = null)
    {
        $query = $this->createQueryBuilder('p');

        if ($wing != null) {
            $query->andWhere('a.wing IN(:wing)')
                ->setParameters(':wing', $wing)
            ;
        }

        if ($tricycle != null) {
            $query->andWhere('a.tricycle IN(:tricycle)')
                ->setParameters(':tricycle', $tricycle)
            ;
        }

        $query->orderBy('p.name', 'ASC');

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

        if (!empty($search->wing)) {
            $query = $query
                ->andWhere('p.wing IN (:wing)')
                ->setParameter(':wing', $search->wing)
            ;
        }

        if (!empty($search->tricycle)) {
            $query = $query
                ->andWhere('p.tricycle IN (:tri)')
                ->setParameter(':tri', $search->tricycle)
            ;
        }

        return $query->getQuery()->getResult();
    }

//    /**
//     * @return DocCategories[] Returns an array of DocCategories objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('d')
//            ->andWhere('d.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('d.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?DocCategories
//    {
//        return $this->createQueryBuilder('d')
//            ->andWhere('d.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
