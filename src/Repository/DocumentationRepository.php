<?php

namespace App\Repository;

use App\Classes\DocSearch;
use App\Entity\Documentation;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Documentation>
 *
 * @method Documentation|null find($id, $lockMode = null, $lockVersion = null)
 * @method Documentation|null findOneBy(array $criteria, array $orderBy = null)
 * @method Documentation[]    findAll()
 * @method Documentation[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class DocumentationRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Documentation::class);
    }

    public function save(Documentation $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Documentation $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    /**
     * @return void
     */
    public function getPaginatedProducts($filter_wing = null, $filter_name = null)
    {
        $query = $this->createQueryBuilder('p');

        if ($filter_wing != null) {
            $query->andWhere('a.product_wing IN(:wings)')
                ->setParameters(':wings', $filter_wing)
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
    public function findWithSearch(DocSearch $search)
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
                ->andWhere('p.filter_name IN (:filter_name)')
                ->setParameter('filter_name', $search->filter_name)
            ;
        }

        return $query->getQuery()->getResult();
    }

//    /**
//     * @return Documentation[] Returns an array of Documentation objects
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

//    public function findOneBySomeField($value): ?Documentation
//    {
//        return $this->createQueryBuilder('d')
//            ->andWhere('d.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
