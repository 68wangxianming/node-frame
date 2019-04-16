<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "tl_books".
 *
 * @property int $id
 * @property string $name
 * @property string $author
 */
class Books extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'tl_books';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['name', 'author'], 'required'],
            [['name'], 'string', 'max' => 100],
            [['author'], 'string', 'max' => 500],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'name' => 'Name',
            'author' => 'Author',
        ];
    }
}
