import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "notes" */
  delete_notes?: Maybe<Notes_Mutation_Response>;
  /** delete single row from the table: "notes" */
  delete_notes_by_pk?: Maybe<Notes>;
  /** delete data from the table: "utilisateur" */
  delete_utilisateur?: Maybe<Utilisateur_Mutation_Response>;
  /** delete single row from the table: "utilisateur" */
  delete_utilisateur_by_pk?: Maybe<Utilisateur>;
  /** insert data into the table: "notes" */
  insert_notes?: Maybe<Notes_Mutation_Response>;
  /** insert a single row into the table: "notes" */
  insert_notes_one?: Maybe<Notes>;
  /** insert data into the table: "utilisateur" */
  insert_utilisateur?: Maybe<Utilisateur_Mutation_Response>;
  /** insert a single row into the table: "utilisateur" */
  insert_utilisateur_one?: Maybe<Utilisateur>;
  /** update data of the table: "notes" */
  update_notes?: Maybe<Notes_Mutation_Response>;
  /** update single row of the table: "notes" */
  update_notes_by_pk?: Maybe<Notes>;
  /** update data of the table: "utilisateur" */
  update_utilisateur?: Maybe<Utilisateur_Mutation_Response>;
  /** update single row of the table: "utilisateur" */
  update_utilisateur_by_pk?: Maybe<Utilisateur>;
};


/** mutation root */
export type Mutation_RootDelete_NotesArgs = {
  where: Notes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Notes_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_UtilisateurArgs = {
  where: Utilisateur_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Utilisateur_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_NotesArgs = {
  objects: Array<Notes_Insert_Input>;
  on_conflict?: Maybe<Notes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Notes_OneArgs = {
  object: Notes_Insert_Input;
  on_conflict?: Maybe<Notes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UtilisateurArgs = {
  objects: Array<Utilisateur_Insert_Input>;
  on_conflict?: Maybe<Utilisateur_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Utilisateur_OneArgs = {
  object: Utilisateur_Insert_Input;
  on_conflict?: Maybe<Utilisateur_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_NotesArgs = {
  _inc?: Maybe<Notes_Inc_Input>;
  _set?: Maybe<Notes_Set_Input>;
  where: Notes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Notes_By_PkArgs = {
  _inc?: Maybe<Notes_Inc_Input>;
  _set?: Maybe<Notes_Set_Input>;
  pk_columns: Notes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UtilisateurArgs = {
  _inc?: Maybe<Utilisateur_Inc_Input>;
  _set?: Maybe<Utilisateur_Set_Input>;
  where: Utilisateur_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Utilisateur_By_PkArgs = {
  _inc?: Maybe<Utilisateur_Inc_Input>;
  _set?: Maybe<Utilisateur_Set_Input>;
  pk_columns: Utilisateur_Pk_Columns_Input;
};

/** columns and relationships of "notes" */
export type Notes = {
  __typename?: 'notes';
  active: Scalars['Boolean'];
  contenu: Scalars['String'];
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  id_utilisateur: Scalars['Int'];
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  utilisateur: Utilisateur;
};

/** aggregated selection of "notes" */
export type Notes_Aggregate = {
  __typename?: 'notes_aggregate';
  aggregate?: Maybe<Notes_Aggregate_Fields>;
  nodes: Array<Notes>;
};

/** aggregate fields of "notes" */
export type Notes_Aggregate_Fields = {
  __typename?: 'notes_aggregate_fields';
  avg?: Maybe<Notes_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Notes_Max_Fields>;
  min?: Maybe<Notes_Min_Fields>;
  stddev?: Maybe<Notes_Stddev_Fields>;
  stddev_pop?: Maybe<Notes_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Notes_Stddev_Samp_Fields>;
  sum?: Maybe<Notes_Sum_Fields>;
  var_pop?: Maybe<Notes_Var_Pop_Fields>;
  var_samp?: Maybe<Notes_Var_Samp_Fields>;
  variance?: Maybe<Notes_Variance_Fields>;
};


/** aggregate fields of "notes" */
export type Notes_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Notes_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "notes" */
export type Notes_Aggregate_Order_By = {
  avg?: Maybe<Notes_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Notes_Max_Order_By>;
  min?: Maybe<Notes_Min_Order_By>;
  stddev?: Maybe<Notes_Stddev_Order_By>;
  stddev_pop?: Maybe<Notes_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Notes_Stddev_Samp_Order_By>;
  sum?: Maybe<Notes_Sum_Order_By>;
  var_pop?: Maybe<Notes_Var_Pop_Order_By>;
  var_samp?: Maybe<Notes_Var_Samp_Order_By>;
  variance?: Maybe<Notes_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "notes" */
export type Notes_Arr_Rel_Insert_Input = {
  data: Array<Notes_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Notes_On_Conflict>;
};

/** aggregate avg on columns */
export type Notes_Avg_Fields = {
  __typename?: 'notes_avg_fields';
  id?: Maybe<Scalars['Float']>;
  id_utilisateur?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "notes" */
export type Notes_Avg_Order_By = {
  id?: Maybe<Order_By>;
  id_utilisateur?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "notes". All fields are combined with a logical 'AND'. */
export type Notes_Bool_Exp = {
  _and?: Maybe<Array<Notes_Bool_Exp>>;
  _not?: Maybe<Notes_Bool_Exp>;
  _or?: Maybe<Array<Notes_Bool_Exp>>;
  active?: Maybe<Boolean_Comparison_Exp>;
  contenu?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  id_utilisateur?: Maybe<Int_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  utilisateur?: Maybe<Utilisateur_Bool_Exp>;
};

/** unique or primary key constraints on table "notes" */
export enum Notes_Constraint {
  /** unique or primary key constraint */
  NotesPkey = 'notes_pkey'
}

/** input type for incrementing numeric columns in table "notes" */
export type Notes_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  id_utilisateur?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "notes" */
export type Notes_Insert_Input = {
  active?: Maybe<Scalars['Boolean']>;
  contenu?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  id_utilisateur?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  utilisateur?: Maybe<Utilisateur_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Notes_Max_Fields = {
  __typename?: 'notes_max_fields';
  contenu?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  id_utilisateur?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "notes" */
export type Notes_Max_Order_By = {
  contenu?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  id_utilisateur?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Notes_Min_Fields = {
  __typename?: 'notes_min_fields';
  contenu?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  id_utilisateur?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "notes" */
export type Notes_Min_Order_By = {
  contenu?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  id_utilisateur?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "notes" */
export type Notes_Mutation_Response = {
  __typename?: 'notes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Notes>;
};

/** on conflict condition type for table "notes" */
export type Notes_On_Conflict = {
  constraint: Notes_Constraint;
  update_columns?: Array<Notes_Update_Column>;
  where?: Maybe<Notes_Bool_Exp>;
};

/** Ordering options when selecting data from "notes". */
export type Notes_Order_By = {
  active?: Maybe<Order_By>;
  contenu?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  id_utilisateur?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  utilisateur?: Maybe<Utilisateur_Order_By>;
};

/** primary key columns input for table: notes */
export type Notes_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "notes" */
export enum Notes_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  Contenu = 'contenu',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IdUtilisateur = 'id_utilisateur',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "notes" */
export type Notes_Set_Input = {
  active?: Maybe<Scalars['Boolean']>;
  contenu?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  id_utilisateur?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Notes_Stddev_Fields = {
  __typename?: 'notes_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  id_utilisateur?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "notes" */
export type Notes_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  id_utilisateur?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Notes_Stddev_Pop_Fields = {
  __typename?: 'notes_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  id_utilisateur?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "notes" */
export type Notes_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  id_utilisateur?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Notes_Stddev_Samp_Fields = {
  __typename?: 'notes_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  id_utilisateur?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "notes" */
export type Notes_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  id_utilisateur?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Notes_Sum_Fields = {
  __typename?: 'notes_sum_fields';
  id?: Maybe<Scalars['Int']>;
  id_utilisateur?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "notes" */
export type Notes_Sum_Order_By = {
  id?: Maybe<Order_By>;
  id_utilisateur?: Maybe<Order_By>;
};

/** update columns of table "notes" */
export enum Notes_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  Contenu = 'contenu',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IdUtilisateur = 'id_utilisateur',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Notes_Var_Pop_Fields = {
  __typename?: 'notes_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  id_utilisateur?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "notes" */
export type Notes_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  id_utilisateur?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Notes_Var_Samp_Fields = {
  __typename?: 'notes_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  id_utilisateur?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "notes" */
export type Notes_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  id_utilisateur?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Notes_Variance_Fields = {
  __typename?: 'notes_variance_fields';
  id?: Maybe<Scalars['Float']>;
  id_utilisateur?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "notes" */
export type Notes_Variance_Order_By = {
  id?: Maybe<Order_By>;
  id_utilisateur?: Maybe<Order_By>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "notes" */
  notes: Array<Notes>;
  /** An aggregate relationship */
  notes_aggregate: Notes_Aggregate;
  /** fetch data from the table: "notes" using primary key columns */
  notes_by_pk?: Maybe<Notes>;
  /** fetch data from the table: "utilisateur" */
  utilisateur: Array<Utilisateur>;
  /** fetch aggregated fields from the table: "utilisateur" */
  utilisateur_aggregate: Utilisateur_Aggregate;
  /** fetch data from the table: "utilisateur" using primary key columns */
  utilisateur_by_pk?: Maybe<Utilisateur>;
};


export type Query_RootNotesArgs = {
  distinct_on?: Maybe<Array<Notes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Notes_Order_By>>;
  where?: Maybe<Notes_Bool_Exp>;
};


export type Query_RootNotes_AggregateArgs = {
  distinct_on?: Maybe<Array<Notes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Notes_Order_By>>;
  where?: Maybe<Notes_Bool_Exp>;
};


export type Query_RootNotes_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootUtilisateurArgs = {
  distinct_on?: Maybe<Array<Utilisateur_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Utilisateur_Order_By>>;
  where?: Maybe<Utilisateur_Bool_Exp>;
};


export type Query_RootUtilisateur_AggregateArgs = {
  distinct_on?: Maybe<Array<Utilisateur_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Utilisateur_Order_By>>;
  where?: Maybe<Utilisateur_Bool_Exp>;
};


export type Query_RootUtilisateur_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "notes" */
  notes: Array<Notes>;
  /** An aggregate relationship */
  notes_aggregate: Notes_Aggregate;
  /** fetch data from the table: "notes" using primary key columns */
  notes_by_pk?: Maybe<Notes>;
  /** fetch data from the table: "utilisateur" */
  utilisateur: Array<Utilisateur>;
  /** fetch aggregated fields from the table: "utilisateur" */
  utilisateur_aggregate: Utilisateur_Aggregate;
  /** fetch data from the table: "utilisateur" using primary key columns */
  utilisateur_by_pk?: Maybe<Utilisateur>;
};


export type Subscription_RootNotesArgs = {
  distinct_on?: Maybe<Array<Notes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Notes_Order_By>>;
  where?: Maybe<Notes_Bool_Exp>;
};


export type Subscription_RootNotes_AggregateArgs = {
  distinct_on?: Maybe<Array<Notes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Notes_Order_By>>;
  where?: Maybe<Notes_Bool_Exp>;
};


export type Subscription_RootNotes_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootUtilisateurArgs = {
  distinct_on?: Maybe<Array<Utilisateur_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Utilisateur_Order_By>>;
  where?: Maybe<Utilisateur_Bool_Exp>;
};


export type Subscription_RootUtilisateur_AggregateArgs = {
  distinct_on?: Maybe<Array<Utilisateur_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Utilisateur_Order_By>>;
  where?: Maybe<Utilisateur_Bool_Exp>;
};


export type Subscription_RootUtilisateur_By_PkArgs = {
  id: Scalars['Int'];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "utilisateur" */
export type Utilisateur = {
  __typename?: 'utilisateur';
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  /** fetch data from the table: "notes" */
  notes: Array<Notes>;
  /** An aggregate relationship */
  notes_aggregate: Notes_Aggregate;
  pseudonyme: Scalars['String'];
};


/** columns and relationships of "utilisateur" */
export type UtilisateurNotesArgs = {
  distinct_on?: Maybe<Array<Notes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Notes_Order_By>>;
  where?: Maybe<Notes_Bool_Exp>;
};


/** columns and relationships of "utilisateur" */
export type UtilisateurNotes_AggregateArgs = {
  distinct_on?: Maybe<Array<Notes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Notes_Order_By>>;
  where?: Maybe<Notes_Bool_Exp>;
};

/** aggregated selection of "utilisateur" */
export type Utilisateur_Aggregate = {
  __typename?: 'utilisateur_aggregate';
  aggregate?: Maybe<Utilisateur_Aggregate_Fields>;
  nodes: Array<Utilisateur>;
};

/** aggregate fields of "utilisateur" */
export type Utilisateur_Aggregate_Fields = {
  __typename?: 'utilisateur_aggregate_fields';
  avg?: Maybe<Utilisateur_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Utilisateur_Max_Fields>;
  min?: Maybe<Utilisateur_Min_Fields>;
  stddev?: Maybe<Utilisateur_Stddev_Fields>;
  stddev_pop?: Maybe<Utilisateur_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Utilisateur_Stddev_Samp_Fields>;
  sum?: Maybe<Utilisateur_Sum_Fields>;
  var_pop?: Maybe<Utilisateur_Var_Pop_Fields>;
  var_samp?: Maybe<Utilisateur_Var_Samp_Fields>;
  variance?: Maybe<Utilisateur_Variance_Fields>;
};


/** aggregate fields of "utilisateur" */
export type Utilisateur_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Utilisateur_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Utilisateur_Avg_Fields = {
  __typename?: 'utilisateur_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "utilisateur". All fields are combined with a logical 'AND'. */
export type Utilisateur_Bool_Exp = {
  _and?: Maybe<Array<Utilisateur_Bool_Exp>>;
  _not?: Maybe<Utilisateur_Bool_Exp>;
  _or?: Maybe<Array<Utilisateur_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  notes?: Maybe<Notes_Bool_Exp>;
  pseudonyme?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "utilisateur" */
export enum Utilisateur_Constraint {
  /** unique or primary key constraint */
  UtilisateurPkey = 'utilisateur_pkey',
  /** unique or primary key constraint */
  UtilisateurPseudoKey = 'utilisateur_pseudo_key'
}

/** input type for incrementing numeric columns in table "utilisateur" */
export type Utilisateur_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "utilisateur" */
export type Utilisateur_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  notes?: Maybe<Notes_Arr_Rel_Insert_Input>;
  pseudonyme?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Utilisateur_Max_Fields = {
  __typename?: 'utilisateur_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  pseudonyme?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Utilisateur_Min_Fields = {
  __typename?: 'utilisateur_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  pseudonyme?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "utilisateur" */
export type Utilisateur_Mutation_Response = {
  __typename?: 'utilisateur_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Utilisateur>;
};

/** input type for inserting object relation for remote table "utilisateur" */
export type Utilisateur_Obj_Rel_Insert_Input = {
  data: Utilisateur_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Utilisateur_On_Conflict>;
};

/** on conflict condition type for table "utilisateur" */
export type Utilisateur_On_Conflict = {
  constraint: Utilisateur_Constraint;
  update_columns?: Array<Utilisateur_Update_Column>;
  where?: Maybe<Utilisateur_Bool_Exp>;
};

/** Ordering options when selecting data from "utilisateur". */
export type Utilisateur_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  notes_aggregate?: Maybe<Notes_Aggregate_Order_By>;
  pseudonyme?: Maybe<Order_By>;
};

/** primary key columns input for table: utilisateur */
export type Utilisateur_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "utilisateur" */
export enum Utilisateur_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Pseudonyme = 'pseudonyme'
}

/** input type for updating data in table "utilisateur" */
export type Utilisateur_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  pseudonyme?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Utilisateur_Stddev_Fields = {
  __typename?: 'utilisateur_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Utilisateur_Stddev_Pop_Fields = {
  __typename?: 'utilisateur_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Utilisateur_Stddev_Samp_Fields = {
  __typename?: 'utilisateur_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Utilisateur_Sum_Fields = {
  __typename?: 'utilisateur_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "utilisateur" */
export enum Utilisateur_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Pseudonyme = 'pseudonyme'
}

/** aggregate var_pop on columns */
export type Utilisateur_Var_Pop_Fields = {
  __typename?: 'utilisateur_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Utilisateur_Var_Samp_Fields = {
  __typename?: 'utilisateur_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Utilisateur_Variance_Fields = {
  __typename?: 'utilisateur_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

export type GetNotesWithUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetNotesWithUserQuery = { __typename?: 'query_root', notes: Array<{ __typename?: 'notes', id: number, active: boolean, contenu: string, updated_at: any, utilisateur: { __typename?: 'utilisateur', id: number, pseudonyme: string } }> };

export type GetNoteByPkQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetNoteByPkQuery = { __typename?: 'query_root', notes_by_pk?: { __typename?: 'notes', id: number, active: boolean, contenu: string, updated_at: any, utilisateur: { __typename?: 'utilisateur', id: number, pseudonyme: string } } | null | undefined };

export type GetUsersWithNotesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersWithNotesQuery = { __typename?: 'query_root', utilisateur: Array<{ __typename?: 'utilisateur', id: number, pseudonyme: string, notes: Array<{ __typename?: 'notes', id: number, active: boolean, contenu: string, updated_at: any }> }> };

export type GetUserByPkQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetUserByPkQuery = { __typename?: 'query_root', utilisateur_by_pk?: { __typename?: 'utilisateur', id: number, pseudonyme: string, created_at: any } | null | undefined };

export type GetUserByNameQueryVariables = Exact<{
  pseudo: Scalars['String'];
}>;


export type GetUserByNameQuery = { __typename?: 'query_root', utilisateur: Array<{ __typename?: 'utilisateur', id: number, pseudonyme: string, created_at: any }> };

export type GetUserWithNotesByPkQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetUserWithNotesByPkQuery = { __typename?: 'query_root', utilisateur_by_pk?: { __typename?: 'utilisateur', id: number, pseudonyme: string, created_at: any } | null | undefined };

export type GetUserWithNotesByNameQueryVariables = Exact<{
  pseudo: Scalars['String'];
}>;


export type GetUserWithNotesByNameQuery = { __typename?: 'query_root', utilisateur: Array<{ __typename?: 'utilisateur', id: number, pseudonyme: string, created_at: any, notes: Array<{ __typename?: 'notes', id: number, active: boolean, contenu: string, updated_at: any }> }> };

export type AddUserMutationVariables = Exact<{
  pseudo: Scalars['String'];
}>;


export type AddUserMutation = { __typename?: 'mutation_root', insert_utilisateur?: { __typename?: 'utilisateur_mutation_response', returning: Array<{ __typename?: 'utilisateur', id: number, created_at: any, pseudonyme: string }> } | null | undefined };

export type DeleteUserByPkMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteUserByPkMutation = { __typename?: 'mutation_root', delete_utilisateur_by_pk?: { __typename?: 'utilisateur', pseudonyme: string } | null | undefined };

export type DeleteUserByNameMutationVariables = Exact<{
  pseudo: Scalars['String'];
}>;


export type DeleteUserByNameMutation = { __typename?: 'mutation_root', delete_utilisateur?: { __typename?: 'utilisateur_mutation_response', affected_rows: number } | null | undefined };


export const GetNotesWithUserDocument = gql`
    query GetNotesWithUser {
  notes {
    id
    active
    contenu
    updated_at
    utilisateur {
      id
      pseudonyme
    }
  }
}
    `;

/**
 * __useGetNotesWithUserQuery__
 *
 * To run a query within a React component, call `useGetNotesWithUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNotesWithUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNotesWithUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetNotesWithUserQuery(baseOptions?: Apollo.QueryHookOptions<GetNotesWithUserQuery, GetNotesWithUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetNotesWithUserQuery, GetNotesWithUserQueryVariables>(GetNotesWithUserDocument, options);
      }
export function useGetNotesWithUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetNotesWithUserQuery, GetNotesWithUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetNotesWithUserQuery, GetNotesWithUserQueryVariables>(GetNotesWithUserDocument, options);
        }
export type GetNotesWithUserQueryHookResult = ReturnType<typeof useGetNotesWithUserQuery>;
export type GetNotesWithUserLazyQueryHookResult = ReturnType<typeof useGetNotesWithUserLazyQuery>;
export type GetNotesWithUserQueryResult = Apollo.QueryResult<GetNotesWithUserQuery, GetNotesWithUserQueryVariables>;
export const GetNoteByPkDocument = gql`
    query GetNoteByPK($id: Int!) {
  notes_by_pk(id: $id) {
    id
    active
    contenu
    updated_at
    utilisateur {
      id
      pseudonyme
    }
  }
}
    `;

/**
 * __useGetNoteByPkQuery__
 *
 * To run a query within a React component, call `useGetNoteByPkQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNoteByPkQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNoteByPkQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetNoteByPkQuery(baseOptions: Apollo.QueryHookOptions<GetNoteByPkQuery, GetNoteByPkQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetNoteByPkQuery, GetNoteByPkQueryVariables>(GetNoteByPkDocument, options);
      }
export function useGetNoteByPkLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetNoteByPkQuery, GetNoteByPkQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetNoteByPkQuery, GetNoteByPkQueryVariables>(GetNoteByPkDocument, options);
        }
export type GetNoteByPkQueryHookResult = ReturnType<typeof useGetNoteByPkQuery>;
export type GetNoteByPkLazyQueryHookResult = ReturnType<typeof useGetNoteByPkLazyQuery>;
export type GetNoteByPkQueryResult = Apollo.QueryResult<GetNoteByPkQuery, GetNoteByPkQueryVariables>;
export const GetUsersWithNotesDocument = gql`
    query GetUsersWithNotes {
  utilisateur {
    id
    pseudonyme
    notes {
      id
      active
      contenu
      updated_at
    }
  }
}
    `;

/**
 * __useGetUsersWithNotesQuery__
 *
 * To run a query within a React component, call `useGetUsersWithNotesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersWithNotesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersWithNotesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersWithNotesQuery(baseOptions?: Apollo.QueryHookOptions<GetUsersWithNotesQuery, GetUsersWithNotesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUsersWithNotesQuery, GetUsersWithNotesQueryVariables>(GetUsersWithNotesDocument, options);
      }
export function useGetUsersWithNotesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersWithNotesQuery, GetUsersWithNotesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUsersWithNotesQuery, GetUsersWithNotesQueryVariables>(GetUsersWithNotesDocument, options);
        }
export type GetUsersWithNotesQueryHookResult = ReturnType<typeof useGetUsersWithNotesQuery>;
export type GetUsersWithNotesLazyQueryHookResult = ReturnType<typeof useGetUsersWithNotesLazyQuery>;
export type GetUsersWithNotesQueryResult = Apollo.QueryResult<GetUsersWithNotesQuery, GetUsersWithNotesQueryVariables>;
export const GetUserByPkDocument = gql`
    query GetUserByPK($id: Int!) {
  utilisateur_by_pk(id: $id) {
    id
    pseudonyme
    created_at
  }
}
    `;

/**
 * __useGetUserByPkQuery__
 *
 * To run a query within a React component, call `useGetUserByPkQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserByPkQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserByPkQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserByPkQuery(baseOptions: Apollo.QueryHookOptions<GetUserByPkQuery, GetUserByPkQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserByPkQuery, GetUserByPkQueryVariables>(GetUserByPkDocument, options);
      }
export function useGetUserByPkLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserByPkQuery, GetUserByPkQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserByPkQuery, GetUserByPkQueryVariables>(GetUserByPkDocument, options);
        }
export type GetUserByPkQueryHookResult = ReturnType<typeof useGetUserByPkQuery>;
export type GetUserByPkLazyQueryHookResult = ReturnType<typeof useGetUserByPkLazyQuery>;
export type GetUserByPkQueryResult = Apollo.QueryResult<GetUserByPkQuery, GetUserByPkQueryVariables>;
export const GetUserByNameDocument = gql`
    query GetUserByName($pseudo: String!) {
  utilisateur(where: {pseudonyme: {_ilike: $pseudo}}) {
    id
    pseudonyme
    created_at
  }
}
    `;

/**
 * __useGetUserByNameQuery__
 *
 * To run a query within a React component, call `useGetUserByNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserByNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserByNameQuery({
 *   variables: {
 *      pseudo: // value for 'pseudo'
 *   },
 * });
 */
export function useGetUserByNameQuery(baseOptions: Apollo.QueryHookOptions<GetUserByNameQuery, GetUserByNameQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserByNameQuery, GetUserByNameQueryVariables>(GetUserByNameDocument, options);
      }
export function useGetUserByNameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserByNameQuery, GetUserByNameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserByNameQuery, GetUserByNameQueryVariables>(GetUserByNameDocument, options);
        }
export type GetUserByNameQueryHookResult = ReturnType<typeof useGetUserByNameQuery>;
export type GetUserByNameLazyQueryHookResult = ReturnType<typeof useGetUserByNameLazyQuery>;
export type GetUserByNameQueryResult = Apollo.QueryResult<GetUserByNameQuery, GetUserByNameQueryVariables>;
export const GetUserWithNotesByPkDocument = gql`
    query GetUserWithNotesByPK($id: Int!) {
  utilisateur_by_pk(id: $id) {
    id
    pseudonyme
    created_at
  }
}
    `;

/**
 * __useGetUserWithNotesByPkQuery__
 *
 * To run a query within a React component, call `useGetUserWithNotesByPkQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserWithNotesByPkQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserWithNotesByPkQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserWithNotesByPkQuery(baseOptions: Apollo.QueryHookOptions<GetUserWithNotesByPkQuery, GetUserWithNotesByPkQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserWithNotesByPkQuery, GetUserWithNotesByPkQueryVariables>(GetUserWithNotesByPkDocument, options);
      }
export function useGetUserWithNotesByPkLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserWithNotesByPkQuery, GetUserWithNotesByPkQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserWithNotesByPkQuery, GetUserWithNotesByPkQueryVariables>(GetUserWithNotesByPkDocument, options);
        }
export type GetUserWithNotesByPkQueryHookResult = ReturnType<typeof useGetUserWithNotesByPkQuery>;
export type GetUserWithNotesByPkLazyQueryHookResult = ReturnType<typeof useGetUserWithNotesByPkLazyQuery>;
export type GetUserWithNotesByPkQueryResult = Apollo.QueryResult<GetUserWithNotesByPkQuery, GetUserWithNotesByPkQueryVariables>;
export const GetUserWithNotesByNameDocument = gql`
    query GetUserWithNotesByName($pseudo: String!) {
  utilisateur(where: {pseudonyme: {_ilike: $pseudo}}) {
    id
    pseudonyme
    created_at
    notes {
      id
      active
      contenu
      updated_at
    }
  }
}
    `;

/**
 * __useGetUserWithNotesByNameQuery__
 *
 * To run a query within a React component, call `useGetUserWithNotesByNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserWithNotesByNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserWithNotesByNameQuery({
 *   variables: {
 *      pseudo: // value for 'pseudo'
 *   },
 * });
 */
export function useGetUserWithNotesByNameQuery(baseOptions: Apollo.QueryHookOptions<GetUserWithNotesByNameQuery, GetUserWithNotesByNameQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserWithNotesByNameQuery, GetUserWithNotesByNameQueryVariables>(GetUserWithNotesByNameDocument, options);
      }
export function useGetUserWithNotesByNameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserWithNotesByNameQuery, GetUserWithNotesByNameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserWithNotesByNameQuery, GetUserWithNotesByNameQueryVariables>(GetUserWithNotesByNameDocument, options);
        }
export type GetUserWithNotesByNameQueryHookResult = ReturnType<typeof useGetUserWithNotesByNameQuery>;
export type GetUserWithNotesByNameLazyQueryHookResult = ReturnType<typeof useGetUserWithNotesByNameLazyQuery>;
export type GetUserWithNotesByNameQueryResult = Apollo.QueryResult<GetUserWithNotesByNameQuery, GetUserWithNotesByNameQueryVariables>;
export const AddUserDocument = gql`
    mutation AddUser($pseudo: String!) {
  insert_utilisateur(objects: {pseudonyme: $pseudo}) {
    returning {
      id
      created_at
      pseudonyme
    }
  }
}
    `;
export type AddUserMutationFn = Apollo.MutationFunction<AddUserMutation, AddUserMutationVariables>;

/**
 * __useAddUserMutation__
 *
 * To run a mutation, you first call `useAddUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addUserMutation, { data, loading, error }] = useAddUserMutation({
 *   variables: {
 *      pseudo: // value for 'pseudo'
 *   },
 * });
 */
export function useAddUserMutation(baseOptions?: Apollo.MutationHookOptions<AddUserMutation, AddUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddUserMutation, AddUserMutationVariables>(AddUserDocument, options);
      }
export type AddUserMutationHookResult = ReturnType<typeof useAddUserMutation>;
export type AddUserMutationResult = Apollo.MutationResult<AddUserMutation>;
export type AddUserMutationOptions = Apollo.BaseMutationOptions<AddUserMutation, AddUserMutationVariables>;
export const DeleteUserByPkDocument = gql`
    mutation DeleteUserByPK($id: Int!) {
  delete_utilisateur_by_pk(id: $id) {
    pseudonyme
  }
}
    `;
export type DeleteUserByPkMutationFn = Apollo.MutationFunction<DeleteUserByPkMutation, DeleteUserByPkMutationVariables>;

/**
 * __useDeleteUserByPkMutation__
 *
 * To run a mutation, you first call `useDeleteUserByPkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserByPkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserByPkMutation, { data, loading, error }] = useDeleteUserByPkMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteUserByPkMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUserByPkMutation, DeleteUserByPkMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteUserByPkMutation, DeleteUserByPkMutationVariables>(DeleteUserByPkDocument, options);
      }
export type DeleteUserByPkMutationHookResult = ReturnType<typeof useDeleteUserByPkMutation>;
export type DeleteUserByPkMutationResult = Apollo.MutationResult<DeleteUserByPkMutation>;
export type DeleteUserByPkMutationOptions = Apollo.BaseMutationOptions<DeleteUserByPkMutation, DeleteUserByPkMutationVariables>;
export const DeleteUserByNameDocument = gql`
    mutation DeleteUserByName($pseudo: String!) {
  delete_utilisateur(where: {pseudonyme: {_ilike: $pseudo}}) {
    affected_rows
  }
}
    `;
export type DeleteUserByNameMutationFn = Apollo.MutationFunction<DeleteUserByNameMutation, DeleteUserByNameMutationVariables>;

/**
 * __useDeleteUserByNameMutation__
 *
 * To run a mutation, you first call `useDeleteUserByNameMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserByNameMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserByNameMutation, { data, loading, error }] = useDeleteUserByNameMutation({
 *   variables: {
 *      pseudo: // value for 'pseudo'
 *   },
 * });
 */
export function useDeleteUserByNameMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUserByNameMutation, DeleteUserByNameMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteUserByNameMutation, DeleteUserByNameMutationVariables>(DeleteUserByNameDocument, options);
      }
export type DeleteUserByNameMutationHookResult = ReturnType<typeof useDeleteUserByNameMutation>;
export type DeleteUserByNameMutationResult = Apollo.MutationResult<DeleteUserByNameMutation>;
export type DeleteUserByNameMutationOptions = Apollo.BaseMutationOptions<DeleteUserByNameMutation, DeleteUserByNameMutationVariables>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    